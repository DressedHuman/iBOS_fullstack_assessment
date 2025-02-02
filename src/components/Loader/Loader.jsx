import "./Loader.css";

const Loader = () => {
    return (
        <div className={'preloader bg-black'}>
            <div className={'preloader-inner'}>
                <div className={'preloader-icon'}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Loader;