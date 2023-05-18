import axios from "axios";
import { useState, useEffect } from "react";


export const Cards = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [img, setImg] = useState('https://picsum.photos/500/500');
    
    useEffect(() => {
        axios.get('http://localhost:5000/Diretoria/1')
          .then(response => {
            setNome(response.data.nome);
            setDescricao(response.data.descrição);
            setImg(response.data.foto);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    
    
    return (
     <div className='Card_diretoria'>
         <img className='Card_diretoria-img' alt='' src={img} />
        <div className='Card_diretoria-info'>
            <h3 className='Card_diretoria-title'>{nome}</h3>
            <p className='Card_diretoria-description'>{descricao}</p>
        </div>
    </div>
    );
  }

  //card 02
  export const Cards02 = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [img, setImg] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:5000/Diretoria/2')
          .then(response => {
            setNome(response.data.nome);
            setDescricao(response.data.descricao);
            setImg(response.data.foto);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    
    
    return (
     <div className='Card_diretoria'>
         <img className='Card_diretoria-img' alt='' src={img} />
        <div className='Card_diretoria-info'>
            <h3 className='Card_diretoria-title'>{nome}</h3>
            <p className='Card_diretoria-description'>{descricao}</p>
        </div>
    </div>
    );
  }

  //card 03
  export const Cards03 = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [img, setImg] = useState('https://picsum.photos/500/500');
    
    useEffect(() => {
        axios.get('http://localhost:5000/Diretoria/3')
          .then(response => {
            setNome(response.data.nome);
            setDescricao(response.data.descricao);
            setImg(response.data.foto);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    
    
    return (
     <div className='Card_diretoria'>
         <img className='Card_diretoria-img' alt='' src={img} />
        <div className='Card_diretoria-info'>
            <h3 className='Card_diretoria-title'>{nome}</h3>
            <p className='Card_diretoria-description'>{descricao}</p>
        </div>
    </div>
    );
  }