import {message} from 'antd';

export default function Success(){
    message.success('Ekleme işlemi başarılı');

}

export default function Error(){
    message.error('Ekleme gerçekleşmedi ');

}