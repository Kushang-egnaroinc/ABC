package controllers;

import com.avaje.ebean.AdminAutofetch;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("Your new application is ready. Prasad edited this"));
    }
    public static Result admin() {
        return ok(Admin.render());
    }
    public static Result pendingRequest() {
        return ok(pendingRequest.render());
    }
    public static Result factoryReset() {
        return ok(factoryReset.render());
    }
    public static Result deleteNetwork() {
        return ok(deleteNetwork.render());
    }
    public static Result deleteUser() {
        return ok(deleteUser.render());
    }

}
