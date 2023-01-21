import '../App.css';
import Header from '../components/Header.jsx';
import image353 from '../media/353robot.png'

function Homepage() {
    return (
        <div class="parent">
            <div class="centerParent">
                <Header pageState={'portfolio'} />
                    <div class="imageHalf">
                        <div>
                        <h2>Artificial Intelligence Robot Simulation</h2>
                        <h3>Fall 2022</h3>
                        <hr />
                            <p>
                                <b>Key Technologies:</b> Python, Robot Operating System, TensorFlow Keras, and OpenCV
                                <br />
                                <br />
                                <b>Key Achievements:</b> Constructed software for a simulated robot in a ROS Gazebo simulation
                                to autonomously drive and collect data
                            </p>
                        </div>
                        <img src={image353} height='400px' class='portfolio' alt='robot in a ROS gazebo simulation' />
                    </div>

                    <div>
                        <h2>Treasure Collecting Robot</h2>
                        <h3>Summer 2022</h3>
                        <hr />

                        my nama jeff
                    </div>
                    <div>
                        <h2>Internal Product Management Tool</h2>
                        <h3>Spring 2022</h3>
                        <hr />
                        my nama jeff
                        </div>

            </div>
        </div>
    );
}

export default Homepage;
