package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  String[] doctor = {"Fantastic!", "Allons-y!", "Geronimo!"};
  
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String json = convertToJson(doctor);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  private String convertToJson(String[] doctor) {
    String json = "{";
    json += "\"nine\": ";
    json += "\"" + doctor[0] + "\"";
    json += ", ";
    json += "\"ten\": ";
    json += "\"" + doctor[1] + "\"";
    json += ", ";
    json += "\"eleven\": ";
    json += "\"" + doctor[2] + "\"";
    json += "}";
    return json;
  }
}
