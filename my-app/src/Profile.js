import React from 'react';

function Profile() {
    /*const heading = React.createElement('h1', null, 'Biodata Perusahaan');

    const listItem1 = React.createElement('li',null,'Nama: Yoga Julian');
    const listItem2 = React.createElement('li',null,'Bidang: Software Developer');
    const listItem3 = React.createElement('li',null,'Tagline: Buat warisan')

    const unorderedList = React.createElement('ul','null',[listItem1, listItem2, listItem3]);

    const container = React.createElement('div',null,[heading, unorderedList])*/
    
        return (
        <div>
            <h1>Biodata Perusahaan</h1>
            <ul>
                <li>Nama : Yoga Julian</li>
                <li>Bidang : Education</li>
                <li>Tagline: Buat Warisan</li>
                <img src="logo1.png" alt="Institute logo"/>
            </ul>
        </div>
        )
    
}


export default Profile;