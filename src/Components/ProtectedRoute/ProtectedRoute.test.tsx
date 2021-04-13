import { render } from '@testing-library/react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '.';
import { HomePage } from '../../Pages/Home';
import { InvalidPage } from '../../Pages/Invalid';

describe("Protected Route", () => {

    /**
     * @todo Update with your Invalid Page
     */
    it("Should render invalid page", () => {
        const t = render(
            <Switch>
                <Route path='/invalid' component={InvalidPage}></Route>
                <ProtectedRoute path='/' component={HomePage}/>
            </Switch>
            , { wrapper: MemoryRouter });
        const isInvalid = t.getByText("Invalid");
        expect(isInvalid).toBeInTheDocument();
    });

});
