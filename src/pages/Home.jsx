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
                We are a non-profit organization based in Munich. We have been organizing the Klein und Haarig Festival for 7 years now. Initially with 40 guests, during Corona as a musical tent camp and since 2020 as a registered association with now 14 members and 350 guests. We have made it our mission to make electronic music culture tangible in all its colorful, wonderfully weird and progressive facets.
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
                <LinkButton href="https://kleinundhaarig.de" label="Klein und Haarig Festival Website" iconSrc='/arrow_right.svg'/>
                <ProjectCardGroup>
                    <ProjectCard 
                        title="KuH 25 Poster"
                        imageUrl="/project-1.jpg"
                        projectUrl=""
                        iconSrc=""
                    />
                    <ProjectCard 
                        title="KuH 24 Poster"
                        imageUrl="/project-2.png"
                        projectUrl=""
                        iconSrc=""
                    />
                    <ProjectCard 
                        title="KuH 23 Poster"
                        imageUrl="/project-3.jpg"
                        projectUrl=""
                        iconSrc=""
                    />
                </ProjectCardGroup>
            </Section>

            <Section id="join" title="Join us">
                <p style={{fontSize: '20px', color: '#1F2A37', lineHeight: '28px', textAlign: 'left'}}>
                We are always on the lookout for like-minded people who want to and can support our team or the festival. If you would like to take on active tasks or responsibility in the Bunte Platte e.V. or in the organization of the Klein und Haarig Festival, please contact us directly by e-mail. We look forward to every request. If you don't want to or can't help out, but still want to support us, you can do so with an annual payment in the form of a supporting membership. To do this, tick one of the available amounts on the following membership application form and send it to us completed and signed.
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
                    images={['/archive-1.JPG']} 
                    />
                    <ImageRow 
                    variant="double" 
                    images={['/archive-2.JPG', '/archive-3.JPG']} 
                    />
                    <ImageRow 
                    variant="single" 
                    images={['/archive-4.JPG']} 
                    />
            </ImageGroup>

          </ApplicationLayout>
    )
  }
  
  export default Home