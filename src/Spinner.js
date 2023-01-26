import loader from './loader.gif'
function Spinner() {
    return <>
        <div className='text-center'>
            <img className='spinner-img' src={loader}></img>
        </div>
    </>
}
export default Spinner;