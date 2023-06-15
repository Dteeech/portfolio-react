import React from "react"

export const Me = () => {
    return (
        
            <div className="me_container">
                <div>
                    <img className="me_pic"
                    src={`${process.env.PUBLIC_URL + "/img/portrait-isaac.png"}`} 
                    alt=" portrait du créateur du site Isaac Marshall"
                    />
                </div>
                <div>
                    <p   className="me_description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime perferendis facilis natus ea iusto, quo similique eaque sint ab accusantium quibusdam nobis quas quisquam fuga nisi. Dolore error dicta alias!
                        Natus mollitia aliquam inventore, obcaecati modi placeat rerum hic similique facilis, laboriosam assumenda quisquam quasi dolores nemo tempore autem, eveniet illum maxime beatae quod! Accusantium repellat ex itaque et repellendus?
                    </p>
                </div>
                
            </div>
        
    )
}