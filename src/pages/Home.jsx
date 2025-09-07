import { useTheme } from '../theme/ThemeContext';
import { ApplicationLayout } from '../components/ApplicationLayout/ApplicationLayout';
import { Section } from '../components/Section/Section';
import { Accordion } from '../components/Accordion/Accordion';
import { AccordionItem } from '../components/Accordion/Accordion';
import { ProjectCardGroup } from '../components/ProjectCard/ProjectCard';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { List } from '../components/List/List'; 
import { ListItem } from '../components/List/List'; 
import { LinkButton } from '../components/LinkButton/LinkButton';
import { ImageGroup, ImageRow } from '../components/ImageGroup/ImageGroup';


function Home() {
    const { theme } = useTheme();
    
    return (
          <ApplicationLayout variant="oneColumn">

             <Section id="about" title="Who we are">
                <p style={{fontSize: '20px', color: '#1F2A37', lineHeight: '28px', textAlign: 'left'}}>
                Bunte Platte e.V. is a ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <Accordion>
                    <AccordionItem title="More infos on XYZ">
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    </AccordionItem>
                    <AccordionItem title="More infos on XYZ">
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    </AccordionItem>
                    <AccordionItem title="More infos on XYZ">
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    </AccordionItem>
                </Accordion>
            </Section>

            <Section id="projects" title="Our Projects">
                <ProjectCardGroup>
                    <ProjectCard 
                        title="Project Name"
                        imageUrl="/image_placeholder.png"
                        projectUrl="https://kleinundhaarig.de"
                        iconSrc="/arrow_right.svg"
                    />
                    <ProjectCard 
                        title="Project Name"
                        imageUrl="/image_placeholder.png"
                        projectUrl="https://kleinundhaarig.de"
                        iconSrc="/arrow_right.svg"
                    />
                    <ProjectCard 
                        title="Project Name"
                        imageUrl="/image_placeholder.png"
                        projectUrl="https://kleinundhaarig.de"
                        iconSrc="/arrow_right.svg"
                    />
                </ProjectCardGroup>
            </Section>

            <Section id="join" title="Join us">
                <p style={{fontSize: '20px', color: '#1F2A37', lineHeight: '28px', textAlign: 'left'}}>
                Join Bunte Platte e.V. for magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <List>
                    <ListItem iconSrc="/placeholder.svg">
                    Benefit of joining A
                    </ListItem>
                    <ListItem iconSrc="/placeholder.svg">
                    Benefit of joining B
                    </ListItem>
                    <ListItem iconSrc="/placeholder.svg">
                    Benefit of joining C
                    </ListItem>
                </List>
                <LinkButton href="https://kleinundhaarig.de/pdf/230109_Aufnahmeantrag_Foerdermitgliedschaft_BuntePlatte.pdf" label="Join Bunte Platte e.V." iconSrc='/arrow_right.svg'/>
            </Section>

            <Section id="archive" title="Archive">
                <LinkButton href="https://soundcloud.com/kleinundhaarig" label="Check out our Soundcloud" iconSrc='/arrow_right.svg'/>
                <p style={{fontSize: '20px', color: '#1F2A37', lineHeight: '28px', textAlign: 'left'}}>
                Or some images from past projects ↓
                </p>
            </Section>
            <ImageGroup>
                    <ImageRow 
                    variant="single" 
                    images={['/image_placeholder.png']} 
                    />
                    <ImageRow 
                    variant="double" 
                    images={['/image_placeholder.png', '/image_placeholder.png']} 
                    />
                    <ImageRow 
                    variant="single" 
                    images={['/image_placeholder.png']} 
                    />
            </ImageGroup>

          </ApplicationLayout>
    )
  }
  
  export default Home