////////////////////////////
// Populate project nodes //
////////////////////////////

class Project {
  constructor(id, image, heading, languages) {
    this.id = id;
    this.image = image;
    this.heading = heading;
    this.languages = languages;
  }
  getList() {
    return this.languages.split(',').map(li => `<li>${li}</li>`).join('');
  }
  getInnerHtml() {
    return `
      <li id="${this.id}" class="project" style="background-image:url(${this.image})" data-lang="${this.languages}">
        <div class="view"></div>
        <ul class="details"><li>${this.heading}</li>${this.getList()}</ul>
      </li>
    `;
  }
}

const projectData = [];

projectData.push(new Project(
  'better-change', 
  'https://rolandlevy.co.uk/images/better-change-slide.png',
  'Better Change',
  'react,node,express,sass'
));

projectData.push(new Project(
  'ourbnb', 
  'https://rolandlevy.co.uk/images/ourbnb-slide.png',
  'OurBnB',
  'react,node,express,sass'
));

projectData.push(new Project(
  'lovely-grubbly',
  'https://rolandlevy.co.uk/images/lovely-grubbly-slide.png',
  'Lovely Grubbly',
  'react,node,express,sass'
));

projectData.push(new Project(
  'which-city',
  'https://rolandlevy.co.uk/images/which-city-slide.png',
  'Which City?',
  'react,sass'
));

projectData.push(new Project(
  'moviewer',
  'https://rolandlevy.co.uk/images/moviewer-slide.png',
  'Moviewer',
  'react,node,css'
));

document.addEventListener('DOMContentLoaded', (event) => {

  const projectContainer = document.querySelector('.project-container');

  projectData.forEach(project => {
    const liNode = document.createElement('li');
    liNode.insertAdjacentHTML('afterbegin', project.getInnerHtml());
    projectContainer.appendChild(liNode.firstElementChild); 
  });

});