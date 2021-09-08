import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import {cibAnalogue} from '@coreui/icons'

import AppHeaderDropdown from './AppHeaderDropdown'

const AppHeader = () => {
  const [visibility,setVisibility] = useState(true);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={cibAnalogue} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/" component={NavLink} activeClassName="active">
              All Projects
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/profile" component={NavLink} activeClassName="active">
              Profile
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/notifications" component={NavLink} activeClassName="active">
              Notifications
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/new" component={NavLink} activeClassName="active">
              New Project
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="/notifications">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
    </CHeader>
  )
}

export default AppHeader

