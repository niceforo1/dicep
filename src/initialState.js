import React from 'react';
import java from './images/java.jpg';
import spring from './images/spring.jpg';
import hibernate from './images/hibernate.png';
import jsf from './images/jsf.jpg';
import maven from './images/maven.png';
import tomcat from './images/tomcat.png';
import node from './images/Node.png';
import angular from './images/angular.png';
import oracle from './images/orcl.png';
import mongo from './images/mongo.png';
import mysql from './images/mysql.jpg';
import apache from './images/apache.png';
import mision from './images/mision.png';
import servicios from './images/servicios.png';
import quienesSomos from './images/quienesSomos.png';

const initialState = {
	dataTextFour:
		'Utilizamos diversas tecnologías para desarrollar nuestros productos de acuerdo a sus necesidades.',
	dataCardFour: [
		{
			image: java,
			alt: 'Java',
			name: 'Java'
		},
		{
			image: spring,
			alt: 'Spring',
			name: 'Spring'
		},
		{
			image: hibernate,
			alt: 'Hibernate',
			name: 'Hibernate'
		},
		{
			image: jsf,
			alt: 'JSF',
			name: 'Java Server Faces'
		},
		{
			image: maven,
			alt: 'Maven',
			name: 'Apache Maven'
		},
		{
			image: tomcat,
			alt: 'Tomcat',
			name: 'Apache Tomcat'
		},
		{
			image: node,
			alt: 'Nodejs',
			name: 'NODE.JS'
		},
		{
			image: angular,
			alt: 'Angular',
			name: 'ANGULAR'
		},
		{
			image: oracle,
			alt: 'Oracle',
			name: 'ORACLE'
		},
		{
			image: mongo,
			alt: 'MongoDB',
			name: 'MongoDB'
		},
		{
			image: mysql,
			alt: 'MySQL',
			name: 'MySQL'
		},
		{
			image: apache,
			alt: 'Apache',
			name: 'Apache'
		}
	],
	dataThree: [
		{
			name: 'Consultoria',
			text:
				'La nueva era de transformación digital en la que estamos inmersos requiere que los profesionales se encuentren a la vanguardia tecnológica. Es por este motivo que brindamos servicios de asesoramiento basados en nuestra gran experiencia en el mercado para que nuestros clientes cumplan con sus diversos objetivos.'
		},
		{
			name: 'Desarrollo',
			text:
				'Nos especializamos en la creación e implementación de aplicaciones móviles, web y de escritorio que ayuden a nuestros clientes a lograr el crecimiento empresarial que necesitan para mantenerse en la cima de la innovación.'
		},
		{
			name: 'Soporte',
			text:
				'Gracias a nuestras soluciones digitales, hacemos que quienes confían en nuestros servicios puedan dedicar su tiempo a cuestiones empresariales estratégicas particulares de su negocio mientras nosotros reducimos los tiempos de inactividad y agilizamos los procesos de gestión.'
		},
		{
			name: 'Proyectos',
			text:
				'Nuestro trabajo se basa en la utilización de la metodología ágil, la cual nos permite obtener los resultados esperados en menor tiempo y adaptados a las necesidades particulares de cada cliente.'
		}
	],
	dataTextTwo: [
		{
			name: 'Misión:',
			description:
				'Proveer a nuestros clientes de soluciones informáticas utilizando las ultimas tecnologías, siempre aplicando el ingenio, la creatividad y el profesionalismo como base de nuestro trabajo.'
		},
		{
			name: 'Visión:',
			description:
				'Ser la empresa líder en el desarrollo de software de alta calidad, ser reconocida por nuestra creatividad, innovación, servicios, productos y sobre todo por la calidad humana.'
		},
		{
			name: 'Valores:',
			description:
				'El logro de nuestros objetivos estratégicos depende directamente de la práctica de nuestros valores claves:'
		}
	],
	dataIconTwo: [
		{ name: 'Desarrollo' },
		{ name: 'Innovación' },
		{ name: 'Creatividad' },
		{ name: 'Eficiencia' },
		{ name: 'Profesionalismo' }
	],
	dataOne: function() {
		return (
			<p>
				Somos una empresa de especialistas en el{' '}
				<strong>desarrollo de software</strong> con amplia experiencia en el
				rubro que se dedica a crear <strong>aplicaciones informáticas</strong>{' '}
				para poder brindarles a sus clientes productos de alta calidad que los
				ayuden a organizar su negocio mediante una única herramienta.
			</p>
		);
	},
	mision: mision,
	servicios: servicios,
	quienesSomos: quienesSomos
};

export default initialState;
