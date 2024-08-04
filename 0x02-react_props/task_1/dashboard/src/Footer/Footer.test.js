import {shallow} from 'enzyme'

import Footer from './Footer'
import { getFooterCopy, getFullYear } from '../Utils/utils'

describe("Footer component shall run without crashing", ()=>{
    const footer = shallow(<Footer/>)
    it("shall contain at least the text 'Copyright'", ()=>{
        expect(footer.text()).toEqual(
			`Copyright ${getFullYear()} - ${getFooterCopy(true)}`
		);
    })
})