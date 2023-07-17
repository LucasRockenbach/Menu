import { useState } from "react"
import {foodData} from "../../interface/foodData"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate"
 
interface inputProps{
    label: string,
    value:string | number,
    updateValue (value: any): void
    }
    
const Input = ({label, value, updateValue}: inputProps) =>{
    return(<>
        <label>
            {label}
        </label>
        <input value = {value} onChange={e => updateValue(e.target.value)}/>
    </>)
    
}

interface ModalProps {
    closeModal(): void
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: foodData = {
            title, 
            price,
            image
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}