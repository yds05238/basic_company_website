import React from 'react'
import Helmet from 'react-helmet'
import Pricing from '../Pricing'
import PropTypes from 'prop-types'
import Offerings from '../Offerings'



const ProductPageTemplate = ({
  title,
  heading,
  description,
  meta_title,
  meta_description,
  pricing,
  offerings,

}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    <h3 className='has-text-weight-semibold is-size-2'>
                      Efficient FDD Web Application
                  </h3>
                    <p>{"Kaldi is the coffee store for everyone who believes that great coffee shouldn't just taste good, it should do good too. We source all of our beans directly from small scale sustainable farmers and make sure part of the profits are reinvested in their communities."}</p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    <h3 className='has-text-weight-semibold is-size-2'>
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                  <Offerings gridItems={offerings.blurbs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <h2 className='has-text-weight-semibold is-size-2'>
                    {pricing.heading}
                  </h2>
                  <p className='is-size-5'>{pricing.description}</p>
                  <Pricing data={pricing.plans} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

export default ProductPageTemplate
