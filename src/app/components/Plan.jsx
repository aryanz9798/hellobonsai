const Plan = (props) => {
    return(
        <>
        <div className="  flex flex-col px-6 py-6 justify-center items-center rounded-2xl shadow-lg shadow-slate-400 ">
            <h1 className="text-4xl font-bold text-emerald-500">{props.title}</h1>

            <h3 className="text-3xl font-bold ">{props.price} <span className="opacity-40 text-sm">$/month</span> </h3>

            <button className=" bg-emerald-500 px-4 py-2 hover:bg-emerald-700 delay-300 transition-all text-white rounded-2xl mt-4">Start for free</button>

            <p className="text-sm mt-5 ">
                {props.caption}
            </p>
        </div>
        
        
        </>
    )
}

export default Plan;