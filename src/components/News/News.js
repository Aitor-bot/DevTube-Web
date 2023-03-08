import './News.scss';
import React from 'react';

const articles = [{
    title: "The most in-demand programming languages for 2023",
    text: "Coding Dojo has released its list of the most in-demand programming languages for this year. The list uses the number of open full-time jobs to determine the skills that employers are desperately looking for. Notably, the top three most in-demand languages have been shaken up. Likely driven by the demand for machine learning solutions, Python is now in the top spot. Here are the top 10 programming languages by open full-time positions and their ranking change...",
    image: "https://www.developer-tech.com/wp-content/uploads/sites/3/2023/02/coding-dojo-top-programming-languages-2023-python-java-javascript-careers-jobs-research-report-study-350x233.jpg",
    url: "https://www.developer-tech.com/news/2022/mar/08/these-programming-languages-were-most-in-demand-in-2021/"
},
{
    title: "Malware campaign targets official Python and JavaScript repos",
    text: "An active malware campaign is targeting official Python and JavaScript repositories. Software supply chain security firm Phylum spotted the campaign. Phylum said that it discovered the campaign after noticing a flurry of activity around typosquats of the popular Python requests package. Typosquats take advantage of simple typos to install malicious packages. In this case, the PyPI typos include: dequests, fequests, gequests, rdquests, reauests, reduests,...",
    image: "https://www.developer-tech.com/wp-content/uploads/sites/3/2022/12/malware-campaign-javascript-python-npm-pypi-cybersecurity-cyber-security-350x233.jpeg",
    url: "https://www.developer-tech.com/news/2022/mar/08/these-programming-languages-were-most-in-demand-in-2021/"
},
{
    title: "These programming languages were most in-demand in 2021",
    text: "Coding Dojo has released its annual review of the programming language skills most sought after from employers For its research, Coding Dojo scours jobs listing site Indeed. The company looks at what languages appear most in job descriptions and compares their prevalence with previous years to identify trends that could give you an advantage. Python retained its lead in 2021 as the language which cropped up in the most (~70,500) job descriptions. Rounding out the top...",
    image: "https://www.developer-tech.com/wp-content/uploads/sites/3/2022/08/inappbrowser-javascript-injection-tool-privacy-350x211.jpg",
    url: "https://www.developer-tech.com/news/2022/mar/08/these-programming-languages-were-most-in-demand-in-2021/"
},
{
    title: "SlashData: JavaScript and Python boast largest developer communities",
    text: "A new report from SlashData highlights the huge growth in the global developer community over the past six months.The developer economy research specialists estimate there are now 24.3 million global developers, as of Q1 2021. This has increased by around 14 percent from 21.3 million in October 2020.JavaScript continues to attract new developers with around 1.4 million more than six months ago. The language also has, by some distance, the largest developer community at...",
    image: "https://www.developer-tech.com/wp-content/uploads/sites/3/2022/03/coding-dojo-programming-languages-development-research-report-jobs-350x233.jpeg",
    url: "https://www.developer-tech.com/news/2021/apr/27/slashdata-javascript-python-boast-largest-developer-communities/"
}

];

function News() {
    return (
      <div className='news_container'>
        <h1 className="news_title">News</h1>
        {articles.map((article, index) => (
          <a key={index} href={article.url} target="_blank" rel="noopener noreferrer">
            <div>
              <h1>{article.title}</h1>
              <div className='news_data'>
              <img src={article.image} alt="" />
              <p>{article.text}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
export default News;
