import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBraille, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import photo1 from './media/photo1.png'

function App() {
  return (
    <>
        <div className="hero-component">
            <div className="hero-container container">
                <div className="hero-wrapper">
                    <h1 className="title">Classic Cheesecake Recipe</h1>
                    <blockquote className="quote">
                        <FontAwesomeIcon icon={faBraille} className="icon-quote" />
                        Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham crust, no one can deny its simple decadence. For the best results, bake in a water bath.
                    </blockquote>
                </div>
                <div className="img-wrapper">
                    <img src={photo1} alt="Cheesecake picture" className="img"/>
                </div>
            </div>
        </div>
        <div className="info-structure">
            <div className="info-structure-container container">
                <div className="structure-row">
                    <div className="item-list-component">
                        <h2 className="subtitle">Ingredients</h2>
                        <h3 className="item-name">Graham Cracker Crust</h3>
                        <ul className="list">
                            <li className="item">
                                <label className="label">
                                    <input className="item-check" type="checkbox" name="item-check"/>
                                    <span className="custom-text">
                                        1 and 1/2 cups (150g) <strong> graham cracker crumbs</strong> (about 10 full sheet graham crackers)
                                    </span>
                                </label>
                            </li>
                            <li className="item">
                                <label className="label">
                                    <input className="item-check" type="checkbox" name="item-check"/>
                                    <span className="custom-text">
                                        5 Tablespoons (70g) <strong> unsalted butter</strong>, melted
                                    </span>
                                </label>
                            </li>
                            <li className="item">
                                <label className="label">
                                    <input className="item-check" type="checkbox" name="item-check"/>
                                    <span className="custom-text">
                                        1/4 cup (50g) <strong>granulated sugar</strong>
                                    </span>
                                </label>
                            </li>
                        </ul>
                        <h3 className="item-name">Cheesecake</h3>
                        <ul className="list">
                            <li className="item">
                                <label className="label">
                                    <input className="item-check" type="checkbox" name="item-check"/>
                                    <span className="custom-text">
                                        four 8-ounce blocks (904g) full-fat <strong> cream cheese</strong>, softened to room temperature
                                    </span>
                                </label>
                            </li>
                            <li className="item">
                                <label className="label">
                                    <input className="item-check" type="checkbox" name="item-check"/>
                                    <span className="custom-text">
                                        1 cup (200g) <strong>granulated sugar</strong>
                                    </span>
                                </label>
                            </li>
                            <li className="item">
                                <label className="label">
                                    <input className="item-check" type="checkbox" name="item-check"/>
                                    <span className="custom-text">
                                        1 cup (240g) full-fat <strong>sour cream</strong>, at room temperature
                                    </span>
                                </label>
                            </li>
                            <li className="item">
                                <label className="label">
                                    <input className="item-check" type="checkbox" name="item-check"/>
                                    <span className="custom-text">
                                        1 teaspoon <strong>pure vanilla</strong> extract
                                    </span>
                                </label>
                            </li>
                            <li className="item">
                                <label className="label">
                                    <input className="item-check" type="checkbox" name="item-check"/>
                                    <span className="custom-text">
                                        2 teaspoons <strong>fresh lemon juice</strong> (optional, but recommended)
                                    </span>
                                </label>
                            </li>
                            <li className="item">
                                <label className="label">
                                    <input className="item-check" type="checkbox" name="item-check"/>
                                    <span className="custom-text">
                                        3 large <strong>eggs</strong>, at room temperature
                                    </span>
                                </label>
                            </li>
                            <li className="item">
                                <label className="label">
                                    <input className="item-check" type="checkbox" name="item-check"/>
                                    <span className="custom-text">
                                        topping suggestions: <em>salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</em> (recipe in notes) 
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="highlight-steps-component">
                        <div className="highlight active">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon={faUtensils} className="highlight-icon" />
                            </div>
                            <div className="description">
                                <span className="step">Yields</span>
                                <div className="detail">12 servings</div>
                            </div>
                        </div>
                        <div className="time-list">
                            <div className="highlight">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faClock} className="highlight-icon" />
                                </div>
                                <div className="description">
                                    <span className="step">Prep time</span>
                                    <div className="detail">45 minutes</div>
                                </div>
                            </div>
                            <div className="highlight">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faClock} className="highlight-icon" />
                                </div>
                                <div className="description">
                                    <span className="step">Cook time</span>
                                    <div className="detail">1 hour</div>
                                </div>
                            </div>
                            <div className="highlight">
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faClock} className="highlight-icon" />
                                </div>
                                <div className="description">
                                    <span className="step">Yields</span>
                                    <div className="detail">7,75 hours</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="step-list-component">
                    <h2 className="subtitle">Instructions</h2>
                    <ol className="step-list">
                        <li className="step"><span>Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).</span></li>
                        <li className="step"><span><strong>Make the crust:</strong> Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.</span></li>
                        <li className="step"><span><strong>Make the filling:</strong> Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.</span></li>
                        <li className="step"><span><strong>Prepare the simple water bath (see note)</strong> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)</span></li>
                        <li className="step"><span>Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.</span></li>
                        <li className="step"><span>Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.</span></li>
                        <li className="step"><span>Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.</span></li>
                    </ol>
                </div>
                <span className="fade-text">Source: <a href="https://sallybakingaddiction.com/classic-cheesecake/">https://sallybakingaddiction.com/classic-cheesecake/</a></span>
            </div>
        </div>
        <footer className="footer">
            <div className="footer-container container">
                <span className="copyright">
                    created by <u><strong>tasca-eduard</strong></u> - devChallenges.io
                </span>
            </div>
        </footer>      
    </>
  );
}
 
export default App;
