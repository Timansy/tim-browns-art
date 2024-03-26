import { NextPage } from "next";
import Head from "next/head";
import Layout from "components/common/layout";
import styles from "/components/common/layout.module.scss";

import { FaInstagram, FaGoogle } from "react-icons/fa6";
import Link from "next/link";

const PrivacyPage: NextPage = () => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy, timbrowns.art" />
      </Head>
        <div className={styles.about}>
<p>The privacy policy is simple: no personal data shared with us will be given to any third party, under any circumstances. Your data will also never be used by us for any purpose without specific permission.</p>
<p>The app engages in no ad targeting, data mining, or other activities that may compromise your privacy, and we do not affiliate ourselves with any third parties that do so.</p>
        </div>
    </Layout>
  );
};

export default PrivacyPage;
