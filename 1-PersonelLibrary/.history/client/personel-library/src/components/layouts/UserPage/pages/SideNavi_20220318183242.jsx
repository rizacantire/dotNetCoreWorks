import {  Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function SideNavi() {
  const { SubMenu } = Menu;
  return (
    <div>
       <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Kitaplarım">
              <Menu.Item key="1">
                <Link to={"/yazar"}>Yazar'a Göre</Link>
              </Menu.Item>
              <Menu.Item key="2"><Link to={"/kitaplarim"}>Kütaphanem</Link></Menu.Item>
              <Menu.Item key="3"><Link to={"/okuduklarim"}>Okuduklarım</Link></Menu.Item>

              
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Kitap">
              <Menu.Item key="3">
                <Link to={"/kitap-ekle"}>Kütüphaneme<br></br> Ekle</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to={"/kitaplar"}>Kitaplar</Link>
              </Menu.Item>
             
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Kontrol Paneli">
              <Menu.Item key="9">
                <Link to={"/uye-kontrol"}>
                Detay
                </Link>
              </Menu.Item>
              
            </SubMenu>
          </Menu>
    </div>
  )
}
