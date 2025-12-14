// Writing page - showcasing external links and featured poetry collection

import '../css/Writing.css';
import '../css/Layout.css';

export default function Writing() {
    return (
        <div>
            <header className="header">
                <h2>Published Works</h2>
            </header>

            <div className="external-links">
                <ul>
                    <li><header>Poetry</header></li>
                    <li><a href="https://ghostcitypress.com/poetry-76/2021/9/12/melanie-lau" target="_blank" rel="noopener noreferrer"><i>room with no direct sunlight</i>, Ghost City Press</a></li>
                    <li><a href="https://bluemarblereview.com/ode-to-anxiety/" target="_blank" rel="noopener noreferrer"><i>Ode to Anxiety</i>, Blue Marble Review</a></li>
                    <li><a href="https://issuu.com/lorasduhawks/docs/catfishcreek2020" target="_blank" rel="noopener noreferrer"><i>The Simple Life of Stardust</i>, Catfish Creek</a></li>
                </ul>
                <ul>
                    <li><header>Fiction</header></li>
                    <li><a href="https://issuu.com/storkstory/docs/stork_magazine_issue_30_spring_2021_" target="_blank" rel="noopener noreferrer"><i>Impurity</i>, Stork Magazine</a></li>
                    <li><a href="https://www.flashfictiononline.com/article/time-travel/" target="_blank" rel="noopener noreferrer"><i>Time Travel</i>, Flash Fiction Online</a></li>
                    <li><a href="https://issuu.com/lorasduhawks/docs/catfishcreek2020" target="_blank" rel="noopener noreferrer"><i>Waipo</i>, Catfish Creek</a></li>
                </ul>
            </div>

            <div className="featured">
                <header className="poetry-header">
                    <h3>FEATURED COLLECTION</h3>
                    <h1>Poetry about Virginia</h1>
                </header>
                <main className="poetry-container">
                    {/* Project 1 */}
                    <section className="project">
                        <figure className="image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1645668009378-28f0b11be63e?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0"
                                alt="Forest"
                            />
                        </figure>
                        <header className="poem-title">reach</header>
                        {/* The pre tag maintains the line breaks and tabulations of poems */}
                        <pre className="poem-content">
                            {`January numbs us. Keep
on. Stones fence three leaves.
Look, you say: sunset laces

the trees haunting.
Black oak died & keeps dying,
arms lobbed off, gashed bark
(wound).
Fit our
feet to the deer tracks & 
walk rings around the woodlands.
As termites tornado a stump
down to burnt crumbs. Deliver
me to that
center, deepest
shadow in the forest. Look: we

are too far gone.
Fill the bowl at the dip of the hill
a river fills a stream fills a pond.

Three leaves become flowers
in summer.
Virginia suspends itself.
Hold me the same.`}
                        </pre>
                    </section>

                    {/* Project 2 */}
                    <section className="project">
                        <figure className="image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1605429201125-37e867327609?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0"
                                alt="Scrabble tiles falling"
                            />
                        </figure>
                        <header className="poem-title">wonders</header>
                        <pre className="poem-content">
                            {`Cereal bowl.
Blueberries.
Bran.
Milk, now lavender.

Someone brushed the clouds with
a fine-toothed comb today.

We balance our drinks on the ottoman
and play Scrabble. You win with
the word “noodles” and I
shake the board.
Soft clacks.

Morning resumes.
Rain comes.

The car hydroplanes, slipping
on its own four wheels.

Milling about and winter.
Fields across a certain Virginia.
The cows are vaguely cow-shaped.

We skip across the highway, big metal stone, us.`}
                        </pre>
                    </section>

                    {/* Project 3 */}
                    <section className="project">
                        <figure className="image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1651984910246-68529b9d3704?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0"
                                alt="Cat paws"
                            />
                        </figure>
                        <header className="poem-title">trinkets</header>
                        <pre className="poem-content">
                            {`I don't have a cat to show me
her cute, small paws but I have
a handmade bug in a wooden
box who wiggles when shaken.

I bet the smallest thing in my
landlord's house is a baseball
or the key to the safe with my
rent stashed in it or a loose nail.

My beaded mouse keychain is
the size of a quarter. Beat that!

If you're fun, what sort of little
friends do you have hanging out
on your bookshelf? Do you have
a ceramic duck with a blue hat?

I have a knitted gnome with a
mustache larger than his body -
Here! Hold him in your cupped
hand. Life is good like this, right?

Hold each of them, yes, now
him: what a kind, smooth rock.`}
                        </pre>
                    </section>

                    {/* Project 4 */}
                    <section className="project">
                        <figure className="image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1634418074362-1bea22613b18?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0"
                                alt="Highway lamppost"
                            />
                        </figure>
                        <header className="poem-title">highway</header>
                        <pre className="poem-content">
                            {`I miss my exit.

I have a memory of owning wind and noise
my brother at my back
laughing the way stars do
always at me.

I watch a groundhog
hunch over an acorn
in the cradle of a fallen tree
the blur of autumn at its back.

I invoke breaks in the clouds
                        buildings
                        roadkill
                        orange cones.

                        The sky stanzas
                        and falls around me.

I ask my brother if there's music
in the plainspace between two lines -
solid and dashed
whether that song is folding or unfolding.

When I leave
I try to think of his answer
there's too much noise

Because of the notch in the window
the music will find the wind
and invoke something gone.`}
                        </pre>
                    </section>
                </main>
            </div>
        </div>

    );
}
