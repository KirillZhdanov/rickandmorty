import React from 'react';
import CharacterCard from "../components/CharacterCard";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from "../redux/actions/actions";
import { Loader } from "../components/StyledComponents";
import { RootState } from '../redux/store';
import { Character, MainPageProps } from "../interfaces";


type TSelected = {
    charactersInfoReducer: {
        characters: {
            info: {
                pages: number,
                next: string,
                prev: string
            },
            results: [{
                id: number,
                name: string,
                image: string,
                status: string,
                gender: string,
                species: string,
                location: {
                    name: string;
                },
            }]
        }
    }
};



const MainPage: React.FC<MainPageProps> = () => {
    const charactersApiInfo = useSelector((state: RootState | TSelected) => state.charactersInfoReducer.characters);
    const charactersInfo = charactersApiInfo.results;
    const fetchInfo = charactersApiInfo.info;
    const nextPage = Number(fetchInfo?.next?.match(/\d+/g) || 1);
    const dispatch = useDispatch();
    const loader = React.useRef<HTMLDivElement | null>(null);

    const onScroll = () => {
        if (Number(fetchInfo?.pages) >= Number(fetchInfo?.next?.match(/\d+/g)) && fetchInfo?.next?.match(/\d+/g))
            dispatch(fetchCharacters(nextPage));
        if (!fetchInfo?.pages)
            dispatch(fetchCharacters(1));
    }
    const loadMore = React.useCallback((entries) => {

        const target = entries[0];
        if (target.isIntersecting && nextPage) {
            onScroll();
        }
    }, [fetchCharacters, loader.current, onScroll]);



    React.useEffect(() => {
        const options = {
            rootMargin: "400px",
            threshold: 0.25
        };

        const observer = new IntersectionObserver(loadMore, options);
        const currentLoader = loader.current;
        if (loader && currentLoader) {
            observer.observe(currentLoader);
        }
        return () => observer.disconnect();
    }, [loader, loadMore]);

    return (
        <>
            <div className="charactersList"  >
                {
                    charactersInfo.map((character: Character) => (
                        Object.keys(character).length ? <CharacterCard key={character.id} character={character} /> : null
                    ))

                }

            </div>
            <Loader ref={loader}><div className="lds-dual-ring"></div></Loader>
        </>
    )
}

export default MainPage
