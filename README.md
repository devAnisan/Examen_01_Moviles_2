UNIVERSIDAD TECNICA NACIONAL
INGENIERÍA EN TECNOLOGÍAS DE INFORMACIÓN.
SEDE DEL PACÍFICO



Desarrollo de Aplicaciones para Dispositivos Móviles II.


Primer Examen.




Estudiantes: 
Diana Sosa Delgado.
Emmanuel Rodríguez Carrillo.
Daniel Mejía Calderón.



Carnet Estudiantil: 
604740097.
118520271.
604730830.














Estructura creada utilizando Copilot.


![image](https://github.com/user-attachments/assets/47e26be5-543a-47a2-b1cb-d17eba3a7cb2)











Inicializando Home.js con la ayuda de Copilot.

![image](https://github.com/user-attachments/assets/b98179ed-4320-4e8d-9f40-76881b67826d)


Se muestra el App.js, el Home.js y la pantalla del celular, se muestran algunas librerías que se van a utilizar como el ScrollView y Styles_01, con Copilot. 


![image](https://github.com/user-attachments/assets/e94292c4-be3d-4889-ab71-521d6c481682)







Se muestra el componente de Home.js más avanzado donde se enseña el useEffect, que hace la consulta a la Api y abajo se muestran los item con un slice, muestra nada más 5 resultados, con la ayuda de Copilot.

![image](https://github.com/user-attachments/assets/e873731d-cb49-423e-9dd2-a1921ed7d81c)



Aquí se ve como el componente de "Home" tiene un buscador que actualiza el estado de "searchText" y va actualizando automáticamente la búsqueda, con la ayuda de copilot.
![image](https://github.com/user-attachments/assets/6179e2bf-6a05-44c4-baf7-8253d2b9c835)

Acá se muestra la busqueda por categorías, con la ayuda de Copilot.

![image](https://github.com/user-attachments/assets/57a0464f-a2bc-4141-a590-3f0e5438927f)




Aquí se está usando una librería llamada "react-native-picker-selected" para hacer un tipo "comboBox" para seleccionar una categoría, la misma se actualiza cada vez que se selecciona y se actualiza el URI, con ayuda de Copilot.
 
![image](https://github.com/user-attachments/assets/05a718ec-b697-4ed9-9184-046dd744b7c7)






Aquí lo que se está haciendo es solo el componente de Detalles, donde agarro el id relacionado al objeto que selecciona el usuario, eso, me devuelve los reviews, lo que me permite abajo imprimir los comentarios y hacerlo con campos como "fecha" y propiamente el "comentario"
 
![image](https://github.com/user-attachments/assets/ce06ba57-185f-4694-b4ef-528ea27796ea)





Aquí se hizo el método de abrir la página web y a la vez de que solamente si tienen una página web muestre el botón de la página web.


Ahora para abrir en el navegador el link se utiliza una librería de react-native llamada Linking, es sencilla, recibe por parámetro el URL y luego intenta abrirlo, se realizó utilizando Copilot.
 
![image](https://github.com/user-attachments/assets/3c3b9e1b-9b07-4a72-95a5-10e7fa5504ae)

![image](https://github.com/user-attachments/assets/0b5222f2-a735-4c09-bc0b-968c8cd31b14)











 


Es la Página de About us
 ![image](https://github.com/user-attachments/assets/531ef286-6c1c-4668-961c-fb590a497fd0)




Comparación de las propuestas y porqué escogimos Copilot


En el contexto del examen donde el tiempo era un factor que se debía tomar en cuenta, la elección de usar Copilot se basó en su capacidad de generar código, aunque ChatGPT es una muy buena herramienta no logró seguir los pasos requeridos creando funciones con herramientas que necesitan más tiempo para desarrollarse como el desarrollo manual de Axios y Redux, se necesitaban conocimientos más profundos para poder desarrollar esta propuesta que se nos dio, aunque en clases vimos algunas cosas que chat tomó en cuenta también quería utilizar otras que estaban fuera de nuestros conocimientos y la limitante del tiempo no nos permitía investigar al respecto. El uso de más librerías, usar más tecnologías en conjunto y al ser un código más robusto por experiencia sabemos que esta IA comete una mayor cantidad de errores a la hora de generar código.
Por otra parte Copilot generó código que se basa en los estándares de React Native y logró adaptarse mas a nuestras necesidades como la navegación de pantallas, consultas del API y almacenamiento local sin necesidad de especificarle tanto y corregir en reiteradas ocasiones los errores que estaba cometiendo como en ChatGPT.
En conclusión, la propuesta de Copilot fue mas precisa y nos convenció más que la otra sugerencia debido a su estructura y menos cantidad de errores.


Referencias de las propuestas
Cuando se le solicitó una propuesta para la realización del examen, ChatGPT generó un plan detallado que incluye la configuración del proyecto, estructuración del código y desarrollo de funcionalidades en React Native incorporando tecnologías como Redux, Axios y Firebase para autenticación y manejo de estado (OpenAI, 2025).

Referencias
OpenAI. (2025). ChatGPT (Mar 10 version) [Large language model]. https://chat.openai.com
Copilot. (2025). Asistencia en el desarrollo del proyecto Examen_01_Moviles_2 en GitHub. Chat de Copilot. Microsoft.
