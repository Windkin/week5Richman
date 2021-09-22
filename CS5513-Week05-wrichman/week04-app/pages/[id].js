import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }){
  return (
    <Layout>
      <div className="container">
        <div className="row text-center">
          <div className="col-6">
          {itemData ? 
            <h3 className="text-center">{itemData.food}</h3> : null}
              {itemData ?
              <img src={itemData.imgLg} alt="" /> : null}
                {itemData ?
                <p>Made {itemData.date}</p> : null}
          </div>
          
        <div className="card col-6 text-center">
          {itemData ? 
            <h3 className="text-center">Related Posts</h3> : null
          }
        
        {itemData ? 
          itemData.related.map(
            ({ id, food, img }) => (
              <Link key={id} href={`/${id}`}>
                <a>{food}<br/><img src={img}/></a>
              </Link>
            )
          )
          : null
        }

        </div>
        
        </div>
      </div>
    </Layout>
  );
}