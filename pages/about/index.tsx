import { NextPage } from "next";
import Head from "next/head";
import Layout from "components/common/layout";
import styles from "/components/common/layout.module.scss";

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
            nature. It’s been difficult parting from them, instead leveraging
            them for my own healing, meditations, and meanderings.
          </p>
          <p>
            Late in 2021, as covid restrictions were winding down, we had a
            group of close friends over for some games and social fun. We ended
            up with some sketch paper and pencils around a table, just chatting
            it up. There was something about the gathering of old spirits along
            with the atmosphere, where there were lots of great stories shared
            with some equally potent edibles. which allowed me to fully put my
            guard down and draw freely.
          </p>
          <p>
            There is joy and authenticity in the act of creating illustrations
            and paintings spontaneously. I surprise myself all the time. The
            paper, canvas, rug underside, fabric, substrate, etc. each hold a
            new universe to collaborate and be intimate with. There are times,
            when adding a new stroke or color, I find myself perplexed and
            thinking, “Oh no, what have I done? What is this new element? How
            will I find balance again? How will it behave with everything else?”
            It is in these moments, I realize that I am creating something
            outside my ego’s grasp. Usually, it takes me a few days to
            internalize the meaning of a finished piece for me. In fact, there
            are a few I have yet to successfully interpret.
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
