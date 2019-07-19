import React from 'react'
import PropTypes from 'prop-types'
import ProductPageTemplate from '../../components/ProductPageTemplate'

const ProductPagePreivew = ({ entry, getAsset }) => {
  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  const entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <ProductPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      pricing={{
        heading: entry.getIn(['data', 'pricing', 'heading']),
        description: entry.getIn(['data', 'pricing', 'description']),
        plans: pricingPlans,
      }}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      offerings={{ blurbs }}
    />
  )
}

ProductPagePreivew.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProductPagePreivew
