import React, {useState} from 'react'
import {
    CAvatar,
    CBadge,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react'
import {
    cilBell,
    cilCreditCard,
    cilCommentSquare,
    cilEnvelopeOpen,
    cilFile,
    cilLockLocked,
    cilSettings,
    cilTask,
    cilEnvelopeClosed,
    cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const AppHeaderDropdown = () => {
    const [openIssueCount] = useState(20);
    const [closeIssueCount] = useState(40);

    return (
        <CDropdown variant="nav-item">
            <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
                <CAvatar src={'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'} size="md" />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownHeader className="bg-light fw-semibold py-2">Issues</CDropdownHeader>
                <CDropdownItem>
                    <CIcon icon={cilEnvelopeOpen} className="me-2" />
                    Open
                    <CBadge color="success" className="ms-2">
                        {openIssueCount}
                    </CBadge>
                </CDropdownItem>
                <CDropdownItem>
                    <CIcon icon={cilEnvelopeClosed} className="me-2" />
                    Close
                    <CBadge color="danger" className="ms-2">
                        {closeIssueCount}
                    </CBadge>
                </CDropdownItem>
                <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
                <CDropdownItem href="/profile">
                    <CIcon icon={cilUser} className="me-2" />
                    Profile
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}

export default AppHeaderDropdown
