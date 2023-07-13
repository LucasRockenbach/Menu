import "./food.css"

interface FoodProps{
    price: number,
    title: string,
    image: string 
}
export function Food({ price, image, title } : FoodProps){
    return(
       
            <div className="card">
                <img src="{image}"/>
                <h2>{title}</h2>
                <p><b>valor:</b>{price}</p>
            </div>
        
    )
}
