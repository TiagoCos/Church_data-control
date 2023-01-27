import { Avatar, Card } from 'antd';
//import MyCard from './outros/card';

function Diretoria(){
    const { Meta } = Card;
    return(
      <section id='b' className='segundo'>  
      <div className='container-cards'>
        <h1 className='titulo-cards'>Diretoria e cargos</h1></div>
       <Card className='Card-identificação'
          cover={
          <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
          <b>Title</b>
        <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}  description="This is the description" />
       </Card>

      

      </section>
          
    )
}

export default Diretoria