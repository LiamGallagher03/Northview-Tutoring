import { Table } from 'reactstrap';


function Home() {
    return (
        <div>
            <div>
                <h1 id="homeTitle">Welcome to The Northview High School Tutoring Page!</h1>
            </div>
            <div id="tutorList">
                <Table bordered={true}>
                    <thead>
                        <tr>
                            <th>
                                Head 1
                            </th>
                            <th>
                                Head 2
                            </th>
                            <th>
                                Head 3
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Muck
                                </td>
                                <td>
                                    Suck
                                </td>
                                <td>
                                    Yuck
                                </td>
                            </tr>
                        </tbody>
                </Table>
            </div>
        </div>
    )
}
export default Home