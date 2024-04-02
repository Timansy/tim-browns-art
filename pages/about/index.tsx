import { NextPage } from "next";
import Head from "next/head";
import Layout from "components/common/layout";
import styles from "/components/common/layout.module.scss";
import Image from "next/image";
import { FaInstagram, FaGoogle } from "react-icons/fa6";
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>About/Contact</title>
        <meta name="description" content="Collections, by Tim Brown" />
      </Head>
      <body>
        <div className={styles.about}>
          <div className={styles.link}>
            <a
              href="mailto:brown.tim@gmail.com?subject=About your art..."
              title="About your art..."
            >
              <FaGoogle
                className={styles.icon}
                title="Gmail"
                aria-label="Gmail"
                role="img"
              />
              <span>tim.brown@gmail.com</span>
            </a>
            <br></br>
            <a href="https://www.instagram.com/tim_a_human_advocate/">
              <FaInstagram
                className={styles.icon}
                title="Instagram"
                aria-label="Instagram"
                role="img"
              />
              <span>tim_a_human_advocate</span>
            </a>
          </div>
          <br></br>
          <h2>ARTIST STATEMENT</h2>
          <p>
            My pieces are built emotionally and spontaneously, with a healing
            narrative. Some remind me to let go of fear, encourage me to be
            brave, be myself, deal with the unexpected, forgive, or go find
            nature. I’ve developed a relationship with each one, and they are
            highly emotional kin.
          </p>
          <div style={{ float: "left", padding: "1rem", paddingLeft: "0rem" }}>
            <Image
              src="/bio.jpg"
              width={120}
              height={200}
              alt="Abandoned painting, with a hand"
            />
          </div>
          <p>
            Finding meaningful balance in my pieces, through shape and color,
            brings great joy. I’ll tinker, experiment, and explore the miniscule
            universe being called into existence.
          </p>
          <p>
            When folks ask to take a picture of my work, I’ll sometimes ask them
            to include at least a body part in the view. The work may be
            interesting, but when compared  any human feature, from any
            human being, any art piece doesn’t even come close. We are
            beautiful, and forgetful of this fact. I hope my work inspires you
            to explore the power we have. We are the only beings here which can
            create something from nothing, add darkness light and color, a new
            tune. The closer a piece comes to reveling in human complexity, the
            better.
          </p>
          <h2>ACTIVISM</h2>
          <p>
            Human beings everywhere are becoming more and more engaged in one
            form of activism or another. Now the point of need. I look for
            transformative experiences related to art and community building.
          </p>
          <p>
            I currently support{" "}
            <Link href={"https://food4lives.org"}><u>food4lives</u></Link> in
            Atlanta, GA. We provide volunteer opportunities for community
            outreach, with daily preparation and delivery of vegetarian meals to
            the unhoused and displaced.
          </p>
          <p>
            I have recently moved to KCMO, and am currently exploring ways to
            impact the community.
          </p>
          <h2>SHOWINGS</h2>
          <p>
            Currently looking for spaces to share my work in the Kansas City
            area.
          </p>
          <h2>ABOUT ME</h2>
          <p>
            Self-trained artist, father to five grown children and stepchildren,
            activist, and non-profit sector consultant. I currently live in
            KCMO, a rooting tumbleweed from Atlanta, Austin, Albuquerque, Reno,
            etc.
          </p>
          <p>
            When I was 19, my mother, a divorce attorney, was shot and killed in
            a murder-suicide. Years later, my older brother would take his life
            by overdosing on fentanyl. My family, including myself, has been
            riddled with mental health issues, bolstered by alcohol and
            substance abuse. As an artist, I’ve found benefit in exploring grief
            and the repercussions of living in an aberration driven society. It
            has provided the most transformative form of therapy I’ve
            encountered, through creation. It is a dream for others to find
            healing in my work.
          </p>
        </div>
      </body>
    </Layout>
  );
};

export default AboutPage;
