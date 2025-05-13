const ShimmerLoader=()=>{
    return (
        <div className="restaurant-list">
            {Array(10)
                .fill("")
                .map((e, index) => (
                    <div key={index} className="shimmer-card">
                        <div className="shimmer-image"></div>
                        <div className="shimmer-text"></div>
                        <div className="shimmer-text"></div>
                        <div className="shimmer-text"></div>
                    </div>
                ))}

        </div>
    )
}
export default ShimmerLoader;  