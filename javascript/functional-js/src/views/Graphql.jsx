

import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab } from "react-bootstrap"

function Graphql(props) {
  return (
    <>
          <div>
              <div className='mt-10 text-lg font-bold'> Hooks</div>
              <div>
                  Graphql
              </div>
              <Tabs defaultActiveKey="useState" id="uncontrolled-tab-example" className="mb-3 mt-10">
                  <Tab eventKey="useState" title="useState">
                      
                  </Tab>
              </Tabs>

          </div>
    </>
  )
}

Graphql.propTypes = {}

export default Graphql
