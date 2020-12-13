

import { useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';

const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    }
  })

  const createFadeInClass = () => {
    if (typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein';
    }

    return 'fadein';
  }


  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="About Me - Hung-Chih Huang"
        className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>My name is Hung-Chih Huang calls me Henry Huang. I am an experienced software engineer and Master student in Northeastern University. </p>
              <p>
              I am an Information technology enthusiast who is currently pursuing my master's in information systems 
              and majoring in Big Data and Cloud Computing at northeastern university with an aim to build a career as both Data Engineer and DevOps.
              </p>
              <p>
              Mesmerized by the excitement made by data science in E-commerce, Music streaming, Social Networking, and so on. I am looking for a work build data solution that mixed up data and cook up information out of it. 
              Currently, I am looking for a co-op opportunity in Summer 2021.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default About;
