
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/MyLayout';
import Link from 'next/link';



export default function Tax() {
  return (
    <div>
      <h1 className="title">Loranda Tax Service</h1>
      <Header/>
      <Layout>>
      <p className="quotes">A business that make nothing but money is a poor business.</p>
      <p className="author"> ~ Henry Ford</p>
      <p className="body">Tax season can be a time of the year that most people dread. The complicated tax forms, the rude people, and even the thought of doing them wrong can cause many to stress. However, at Loranda Tax Service, our team strive to make this tax year as easy as we possibly can for you. We provide explanations that are easy to understand and we walk you through it with one-on-one guidance.</p>
      </Layout>
      <Footer/>
    </div>
  );
}
