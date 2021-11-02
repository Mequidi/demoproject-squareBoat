import styles from './About.module.css';
import AboutCard from './AboutCard';

const About = () => {

    const cardDate = [
        {key:1, title: "Get more visibility", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan vitae augue in vestibulum. Etiam aliquam eu massa vitae varius."},
        {key:2, title: "Organize your candidates", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat, dui quis tempus viverra, nisl neque tempor arcu, a tristique"},
        {key:3, title: "Verify their abilities", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris lectus, tempor et facilisis efficitur, dapibus non sem. Aenean mi."}
    ]

    return <div className={styles.about}>
        <h2>Why us</h2>
        <ul>{cardDate.map((card)=><AboutCard 
        key={card.key}
        title={card.title}
        description={card.description}
        />)}</ul>
    </div>
}

export default About;