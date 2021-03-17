import React from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';

const JokesList = props => {
    const fetchJokes = event => {
        event.preventDefault();
        props.getJokes();
    };
    return (
        <>
            <h2>Random Jokes!</h2>
            {props.isFetching && <p>Jokes Incoming!</p>}
            <div>
                {props.jokes.map(joke => (
                    <div key={joke.id}>
                        <h4>{joke.setup}</h4>
                        <p>{joke.punchline}</p>
                    </div>
                ))}
            </div>
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={fetchJokes}>Get Jokes!</button>
        </>
    )
};

const mapStateToProps = state => ({
    jokes: state.jokes,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(mapStateToProps, { getJokes })(JokesList);