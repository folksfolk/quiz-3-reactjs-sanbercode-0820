import React from 'react' 

class About extends React.Component {
    render(){
        return(
            <>
            <div className="body">
                <div style={{padding: "10px", border: "1px solid #1273de", backgroundColor: "#1273de"}}>
                    <h1 style={{textAlign: "center"}}>Data Peserta Bootcamp Reactjs</h1>
                    <ol>
                        <li><strong style={{width: "100px"}}>Nama: </strong>Muhammad Ardhani</li>
                        <li><strong style={{width: "100px"}}>Email: </strong>itachi_the_akatsuki@yahoo.co.id</li>
                        <li><strong style={{width: "100px"}}>Sistem Operasi yang digunakan: </strong>Windows 10</li>
                        <li><strong style={{width: "100px"}}>Akun Gitlab / Github: </strong>@folksfolk</li>
                        <li><strong style={{width: "100px"}}>Akun Telegram: </strong>@folksfolk</li>
                    </ol>
                </div>
            </div>             
            </>
        )
    }
}

export default About