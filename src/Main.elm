module Main exposing (main)

import Browser
import Browser.Navigation as Navigation
import Html as H
import Url



-- MAIN


main : Program Flags Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscription
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }



-- MSG


type Msg
    = NoOp
    | UrlChanged Url.Url
    | LinkClicked Browser.UrlRequest



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        _ ->
            ( model, Cmd.none )



-- FLAG


type alias Flags =
    ()



-- MODEL


type alias Model =
    {}



-- INIT


init : Flags -> Url.Url -> Navigation.Key -> ( Model, Cmd Msg )
init flags url key =
    ( {}, Cmd.none )



-- VIEW


view : Model -> Browser.Document Msg
view model =
    { title = "HAYATO SHIBAHARA"
    , body = [ H.text "HAYATO SHIBAHARA" ]
    }



-- SUBSCRIPTION


subscription : Model -> Sub Msg
subscription model =
    Sub.none
