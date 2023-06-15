import React from "react"

export const Cv = () => {
    return (
        
            <div className="cv_container">
                <div>
                    <img className="cv_pic"
                    src={`${process.env.PUBLIC_URL + "/img/CV-MARSHALL-Isaac-Développeur-web.png"}`} 
                    alt=" CV du créateur du site Isaac Marshall"
                    />
                </div>
                <div>
                    <p   className="cv_description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime perferendis facilis natus ea iusto, quo similique eaque sint ab accusantium quibusdam nobis quas quisquam fuga nisi. Dolore error dicta alias!
                    </p>
                    <button>Télécharger le CV</button>
                </div>
                
            </div>
        
    )
}