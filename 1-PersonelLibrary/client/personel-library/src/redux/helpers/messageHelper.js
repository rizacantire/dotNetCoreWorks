import {message} from 'antd';

export const successed=(result)=>{

    result?message.success(result):message.success('İşlem başarılı');

}

export const  denied=(result)=>{
    result?message.error(result):message.error('İşlem gerçekleşmedi ');

}