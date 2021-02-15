import React from 'react';
import { Link } from 'react-router-dom'
import CharacterCard from "../../components/CharacterCard";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from "../../redux/actions/actions";
import { Loader } from "../../components/StyledComponents";
import { RootState } from '../../redux/store';
import { Character, MainPageProps } from "./types";



const MainPage: React.FC<MainPageProps> = () => {
    const charactersApiInfo = useSelector((state: RootState) => state.charactersInfoReducer);
    const charactersInfo = charactersApiInfo.results;
    const fetchInfo = charactersApiInfo.info;
    const nextPage = Number(fetchInfo?.next?.match(/\d+/g));
    const dispatch = useDispatch();
    const loader = React.useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = React.useState(true)
    const onScroll = () => {
        if (Number(fetchInfo?.pages) >= nextPage && nextPage) {
            dispatch(fetchCharacters(nextPage));
        }
        if (!fetchInfo?.pages) {
            dispatch(fetchCharacters(1));
        }

    }
    const loadMore = React.useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting && nextPage) {
            onScroll();
        }
        if (Number(fetchInfo?.pages) && !nextPage) {
            setVisible(false)
        }
    }, [fetchCharacters, loader.current, onScroll]);

    React.useEffect(() => {
        const options = {
            rootMargin: "700px",
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
                    charactersInfo.map((character: Character, idx: number) => (
                        idx ? <Link to={`${character.id}`} style={{ display: "block" }} className="character" ><CharacterCard key={character.id} character={character} /></Link> : null
                    )
                    )

                }

            </div>
            {visible ? (<Loader ref={loader}><div className="lds-dual-ring"></div></Loader>) : null}
        </>
    )
}

export default MainPage
