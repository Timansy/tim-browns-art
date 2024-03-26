import { NextPage } from "next";
import Head from "next/head";
import Layout from "components/common/layout";
import styles from "/components/common/layout.module.scss";


const TOSPage: NextPage = () => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>Terms of Service</title>
        <meta name="description" content="Terms of Service, timbrowns.art" />
      </Head>
      <div className={styles.about}>
        <h1>Terms of Service</h1>
        <p>
          Please read these terms and conditions &quot;terms and
          conditions&quot;, &quot;terms&quot; carefully before using
          timbrowns.art website &quot;website&quot;, &quot;service&quot;
          operated by atom and molecule, llc. &quot;us&quot;, we&quot;,
          &quot;our&quot;. Conditions of use.
        </p>
        <p>
          By using this website, you certify that you have read and reviewed
          this Agreement and that you agree to comply with its terms. If you do
          not want to be bound by the terms of this Agreement, you are advised
          to stop using the website accordingly. atom and molecule, llc. only
          grants use and access of this website, its products, and its services
          to those who have accepted its terms. Privacy policy Before you
          continue using our website, we advise you to read our privacy policy
          https://timbrowns.art/privacy regarding our user data collection. It
          will help you better understand our practices. Atom and molecule, llc.
          assumes no responsibility for liabilities related to age
          misrepresentation. Intellectual property You agree that all materials,
          products, and services provided on this website are the property of
          atom and molecule, llc., its affiliates, directors, officers,
          employees, agents, suppliers, or licensors including all copyrights,
          trade secrets, trademarks, patents, and other intellectual property.
          You also agree that you will not reproduce or redistribute the atom
          and molecule, llc.&lsquo;s intellectual property in any way, including
          electronic, digital, or new trademark registrations. You grant atom
          and molecule, llc. a royalty-free and non-exclusive license to
          display, use, copy, transmit, and broadcast the content you upload and
          publish. For issues regarding intellectual property claims, you should
          contact the company in order to come to an agreement. User accounts As
          a user of this website, you may be asked to register with us and
          provide private information. You are responsible for ensuring the
          accuracy of this information, and you are responsible for maintaining
          the safety and security of your identifying information. You are also
          responsible for all activities that occur under your account or
          password. If you think there are any possible issues regarding the
          security of your account on the website, inform us immediately so we
          may address them accordingly. We reserve all rights to terminate
          accounts, edit or remove content and cancel orders at our sole
          discretion. Applicable law By using this website, you agree that the
          laws of the United States, without regard to principles of conflict
          laws, will govern these terms and conditions, or any dispute of any
          sort that might come between atom and molecule, llc. and you, or its
          business partners and associates. Disputes Any dispute related in any
          way to your use of this website or to products you purchase from us
          shall be arbitrated by state or federal court United States and you
          consent to exclusive jurisdiction and venue of such courts.
          Indemnification You agree to indemnify atom and molecule, llc. and its
          affiliates and hold atom and molecule, llc. harmless against legal
          claims and demands that may arise from your use or misuse of our
          services. We reserve the right to select our own legal counsel.
          Limitation on liability atom and molecule, llc. is not liable for any
          damages that may occur to you as a result of your misuse of our
          website. atom and molecule, llc. reserves the right to edit, modify,
          and change this Agreement at any time. We shall let our users know of
          these changes through electronic mail. This Agreement is an
          understanding between atom and molecule, llc. and the user, and this
          supersedes and replaces all prior agreements regarding the use of this
          website.
        </p>
      </div>
    </Layout>
  );
};

export default TOSPage;
