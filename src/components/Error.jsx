import gif from '../assets/images/404.gif';

const Error = () => {
    return (
        <div className='max-h-screen flex justify-center items-center'>
            <img src={gif} alt="" />
        </div>
    );
};

export default Error;