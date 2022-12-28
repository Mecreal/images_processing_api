import path from 'path';
import { images_in_dir } from './image_folders';

export const message: string = `
  <div class="global">
    <h1>Image processing with nodeJS </h1>
    <p>
      In order to use this app, the link should be in the following form : <br />
      http://localhost:3300/api/resize?name=<b>mypicture</b>&height=<b>500</b>
      &width=<strong>500</strong>
    </p>
  </div>
  `;

var images_array: string = `<h2> The liste of images available </h2>
<div class="container"> 
`;
var i: number = 0;

for (const img of images_in_dir) {
  i += 1;
  var file_data: { base: string; ext: string; name: string } = path.parse(img);
  var name = file_data.name;
  images_array += `
  
  <div class="card">
  <img src="api/images/${img}" alt="${name}" width="150" height="150">
  <div class="text_cont">
    <h3>name : </h3>
    <b>${name}</b>
  </div>
</div> 
  
  `;
  if (i % 5 === 0) {
    images_array += '<div class="break"></div>';
  }
}
images_array += '</div>';

export const welcome: string = `
<div class="global">
  <h1>Image processing with nodeJS </h1>
  <p>
    To entry to the App please <a href="/api">click here</a>
  </p>
</div>`;

export const cards = images_array;
