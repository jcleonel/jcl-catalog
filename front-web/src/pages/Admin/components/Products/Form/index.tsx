import { makeRequest } from 'core/utils/request';
import { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {   
    const [ formData, setFormData ] = useState<FormState>({
        name: '',
        price: '',
        category: '1',
        description: ''
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_780547-MLB45856153683_052021-O.jpg',
            categories: [{id: formData.category}]
        }   
        console.log(payload);  
        makeRequest({url: '/products', method: 'POST', data: payload})
            .then(() => {
                setFormData({name: '', category: '', price: '', description: ''});
            });           
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}> 
                <BaseForm title="CADASTRAR UM PRODUTO">                
                    <div className="row">
                        <div className="col-6">
                            <input
                                value={formData.name}
                                name="name"
                                type="text"
                                className="form-control mb-5"
                                onChange={handleOnChange}
                                placeholder="Nome do produto"
                            /> 
                            <select 
                                value={formData.category}
                                name="category"
                                className="form-control mb-5" 
                                onChange={handleOnChange}
                            >
                                <option value="1">Livros</option>
                                <option value="3">Computadores</option>
                                <option value="2">Eletronicos</option>
                            </select>
                            <input
                                value={formData.price}
                                name="price"
                                type="text"
                                className="form-control"
                                onChange={handleOnChange}
                                placeholder="Preço"
                            />   
                        </div>
                        <div className="col-6">
                            <textarea 
                                name="description"
                                value={formData.description}
                                onChange={handleOnChange}
                                cols={30} 
                                rows={10}
                                className="form-control"
                            />
                        </div>
                    </div>  
                </BaseForm>
            </form>
        </div>
    );    
}

export default Form;