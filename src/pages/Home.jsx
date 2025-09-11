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

             <Section id="about" title="Über uns">
                <p style={{fontSize: '20px', color: '#1F2A37', lineHeight: '28px', textAlign: 'left'}}>
                Wir sind ein gemeinnütziger Verein mit Sitz in München. Seit 5 Jahren sind wir als Verein tätig und tragen weiter, was bereits vor 7 Jahren entstanden ist: Ein jährliches Kulturfestival mit Schwerpunkt in der Musik. Ehrenamtliches Engagement weit über die Vereinsgrenzen hinaus ermöglicht uns jedes Jahr aufs Neue einen kulturellen Raum für Austausch zu schaffen. Wir haben uns auf die Fahne geschrieben, die elektronische Musikkultur in all ihren bunten, herrlich vielseitigen und progressiven Facetten erfahrbar zu machen. Nicht ein stetiges Konzept, sondern das Neue und Unentdeckte treibt uns dabei an. Bestehende Räume werden immer wieder hinterfragt, während Ziel und Zweck des Projekts und damit des Vereins andauern. Darbietungsformen für Kunstschaffende ohne kommerziellen Druck zu kreieren und Austauschräume für solche untereinander wie mit den Gästen zu schaffen.
                </p>
                <Accordion>
                    <AccordionItem title="Ziele des Vereins">
                        <p style={{fontSize: '20px', color: '#1F2A37', lineHeight: '28px', textAlign: 'left', paddingBottom: '16px',}}>
                            Zweck des Vereins ist die Förderung von Kunst und Kultur.
                        </p>
                        <List>
                            <ListItem iconSrc="/arrow_right.svg">
                            Das aktive Fördern und Erfahrbarmachen der Vielfalt der elektronischen Musikkultur jenseits etablierter Strukturen beispielsweise durch die Organisation und Durchführung von im Kollektiv gestalteten, nichtkommerziellen und publikumswirksamen Tanz-, Kunst-, und Kulturveranstaltungen, auf denen Vielfalt, Offenheit, Toleranz und Freiheit im Mittelpunkt stehen.
                            </ListItem>
                            <ListItem iconSrc="/arrow_right.svg">
                            Die Förderung des Austausches und der Gemeinschaft zwischen Musiker*innen, Künstler*innen und Rezipient*innen beispielsweise durch den Aufbau eines Forums zum gemeinschaftlichen Dialog, zum Austausch von Wissen und Können und zur individuellen Weiterbildung oder durch die Möglichkeit, bei der Organisation und Realisierung von Tanz-, Kunst-, und Kulturveranstaltungen des Vereins aktiv mitzuwirken.
                            </ListItem>
                            <ListItem iconSrc="/arrow_right.svg">
                            Die Unterstützung von Nachwuchskünstler*innen. Beispielsweise durch das Angebot von Auftrittsmöglichkeiten auf unseren Veranstaltungen, die zur Stilfindung und Entwicklung der Künstler*innen beitragen, ohne kommerziellen Druck. Dabei stehen Spaß und Experimentierfreudigkeit im Vordergrund.
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem title="Ehrenamtlichkeit">
                        <p>
                        Wir realisieren, was normalerweise von kommerziellen Strukturen vereinnahmt wird. Das Ergebnis ist ein unvergleichlicher Raum des gemeinsamen Gestaltens und künstlerischen Auslebens. So etwas ist nur möglich durch das ehrenamtliche Engagement vieler Personen. Unser Vereinsteam ist ständig im Wandel und setzt sich aus unterschiedlichen Personen in ganz Deutschland zusammen. Nur durch das Gemeinsame kann ein Raum entstehen, der einer gemeinsamen Vision folgt statt kommerziellem Druck finanziell und inhaltlich nachzugeben.
                        </p>
                    </AccordionItem>
                </Accordion>
            </Section>

            <Section id="projects" title="Projekte">
                <LinkButton href="https://kleinundhaarig.de" label="Klein und Haarig Festival Website" iconSrc='/arrow_right.svg'/>
                <ProjectCardGroup>
                    <ProjectCard 
                        title="KuH 2025 Poster"
                        imageUrl="/project-1.jpg"
                        projectUrl=""
                        iconSrc=""
                    />
                    <ProjectCard 
                        title="KuH 2024 Poster"
                        imageUrl="/project-2.png"
                        projectUrl=""
                        iconSrc=""
                    />
                    <ProjectCard 
                        title="KuH 2023 Poster"
                        imageUrl="/project-3.jpg"
                        projectUrl=""
                        iconSrc=""
                    />
                </ProjectCardGroup>
            </Section>

            <Section id="join" title="Beitritt">
                <p style={{fontSize: '20px', color: '#1F2A37', lineHeight: '28px', textAlign: 'left'}}>
                Wenn du aktiv Aufgaben oder Verantwortung im Bunte Platte e.V. oder bei der Organisation des Klein und Haarig Festivals übernehmen möchtest, kontaktiere uns am Besten direkt per Mail. Wir freuen uns über jede Anfrage. Wenn du nicht mit anpacken möchtest oder kannst, uns aber dennoch unterstützen willst, kannst du dies mit einer jährlichen Zahlung in Form einer Fördermitgliedschaft tun. Kreuze dazu auf dem folgenden Aufnahmeantrag eine der zur Auswahl stehenden Beträge an und schicke uns ihn ausgefüllt und unterschrieben zu.
                </p>
                {/* <List>
                    <ListItem iconSrc="/placeholder.svg">
                    Benefit of joining A
                    </ListItem>
                    <ListItem iconSrc="/placeholder.svg">
                    Benefit of joining B
                    </ListItem>
                    <ListItem iconSrc="/placeholder.svg">
                    Benefit of joining C
                    </ListItem>
                </List> */}
                <LinkButton href="https://kleinundhaarig.de/pdf/230109_Aufnahmeantrag_Foerdermitgliedschaft_BuntePlatte.pdf" label="Fördermitgliedschaft" iconSrc='/arrow_right.svg'/>
                <LinkButton href="mailto:info@bunte-platte.de" label="Kontakt via Mail" iconSrc='/arrow_right.svg'/>
            </Section>

            <Section id="archive" title="Archive">
                <LinkButton href="https://soundcloud.com/kleinundhaarig" label="Unser Audioarchiv ist hier zu finden" iconSrc='/arrow_right.svg'/>
                <p style={{fontSize: '20px', color: '#1F2A37', lineHeight: '28px', textAlign: 'left'}}>
                Ein kleinen Eindruck vermitteln die Fotos hier, aber die schönsten Fotos macht das Herz beim Zusammensein ↓
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