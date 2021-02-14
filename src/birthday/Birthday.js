import React from 'react'
import { useForm } from '../hooks/useForm'
import Swal from 'sweetalert2';
export const Birthday = () => {
    const [formValues, handleInputChange] = useForm({
        code: ""
    });
    const { code } = formValues;
    const handleClick = () => {
        if (code === 'Una semana') {
            window.location.href = "https://drive.google.com/file/d/1PqjE4IvXNPpAhIN9D5qsFpRHdQ3XJ2uV/view";
        } else {
            Swal.fire({
                icon: 'question',
                title: 'Oops...',
                text: 'Esa no era la clave.  ',
                footer: '¡Tú puedes May!'
            })
        }
    }

    return (
        <div className="birt__container">
            <div className="birt__content1">
                <div className="birt__text">
                    <p>Feliz cumpleaños <b>No bonita.</b></p>

                    <h2>Vaya, vaya.</h2>
                    <p>
                        Muy probablemente estarás leyendo esto al recibir las flores, espero sean de tu agrado.
                    </p>
                    <h1><b>Te quiero muchísimo...</b></h1>
                </div>

                <div className="birt__letter" >
                    <div className="birt__textContainer">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur lacus lacus, ut iaculis libero feugiat nec. Donec consequat tellus vel magna luctus sollicitudin. Aliquam lacus purus, venenatis eget pellentesque in, egestas ac magna. Vivamus feugiat, <br /><br />dolor in lacinia venenatis, felis odio cursus velit, id tempor nisl sapien a elit. Cras auctor ante molestie erat<br /><br /> convallis lacinia. Mauris felis diam, hendrerit in convallis vitae, dictum non erat. Aenean pellentesque vestibulum erat at tincidunt. Nunc venenatis non magna at maximus.
                            Suspendisse tristique purus id massa lacinia molestie. Fusce mollis lorem vitae bibendum consectetur. Donec at ornare sem. Cras nisi mauris, vestibulum sit amet nulla quis, accumsan auctor est. Donec efficitur porta leo, quis gravida neque pellentesque eget. Etiam ornare diam velit,<br /><br /> pellentesque imperdiet lectus ultricies vitae. Donec a odio in lorem mollis dapibus a in nisi. Donec dui est, interdum id convallis et, tincidunt eu tellus. Aenean turpis metus, congue vitae pellentesque aliquet, euismod in mi. Suspendisse sem velit,<br /><br /> maximus ac mauris sit amet, consectetur tincidunt dolor. Aenean euismod consectetur nisi. Nam hendrerit nisi ut facilisis condimentum. Integer tristique condimentum porttitor. Morbi lacinia sem quis venenatis commodo. Fusce id sem pretium, ultricies sapien eu, rutrum nisi.
                            Suspendisse tristique purus id massa lacinia molestie. Fusce mollis lorem vitae bibendum consectetur. Donec at ornare sem. Cras nisi mauris, vestibulum sit amet nulla quis, accumsan auctor est. Donec efficitur porta leo, quis gravida neque pellentesque eget. Etiam ornare diam velit,<br /><br /> pellentesque imperdiet lectus ultricies vitae. Donec a odio in lorem mollis dapibus a in nisi. Donec dui est, interdum id convallis et, tincidunt eu tellus. Aenean turpis metus, congue vitae pellentesque aliquet, euismod in mi. Suspendisse sem velit,<br /><br /> maximus ac mauris sit amet, consectetur tincidunt dolor. Aenean euismod consectetur nisi. Nam hendrerit nisi ut facilisis condimentum. Integer tristique condimentum porttitor. Morbi lacinia sem quis venenatis commodo. Fusce id sem pretium, ultricies sapien eu, rutrum nisi.
                            Suspendisse tristique purus id massa lacinia molestie. Fusce mollis lorem vitae bibendum consectetur. Donec at ornare sem. Cras nisi mauris, vestibulum sit amet nulla quis, accumsan auctor est. Donec efficitur porta leo, quis gravida neque pellentesque eget. Etiam ornare diam velit,<br /><br /> pellentesque imperdiet lectus ultricies vitae. Donec a odio in lorem mollis dapibus a in nisi. Donec dui est, interdum id convallis et, tincidunt eu tellus. Aenean turpis metus, congue vitae pellentesque aliquet, euismod in mi. Suspendisse sem velit,<br /><br /> maximus ac mauris sit amet, consectetur tincidunt dolor. Aenean euismod consectetur nisi. Nam hendrerit nisi ut facilisis condimentum. Integer tristique condimentum porttitor. Morbi lacinia sem quis venenatis commodo. Fusce id sem pretium, ultricies sapien eu, rutrum nisi.
                        </p>
                    </div>
                </div>


                <div className="birt__formContainer">
                    <div className="birt__elements">
                        <div className="birt__labelandinput">
                            <p>Codigo: </p>
                            <input
                                type="password"
                                onChange={handleInputChange}
                                value={code}
                                name='code'
                            />
                        </div>
                        <button onClick={handleClick}> Ver </button>
                    </div>
                </div >
            </div >
        </div >
    )
}
