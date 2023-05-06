import React, { useState, useEffect } from 'react';
import './ApiMenuStyle.css'
export default function MenuApi() {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((data) => setMenuData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>Gallery</h1>
            <div className="menu-container">
                {menuData.map((menu) => (
                    <div key={menu.id} className="menu-item">
                        <img src={menu.thumbnailUrl} alt={menu.title} />
                        <h3>{menu.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}