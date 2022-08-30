package com.lin.onlineorder.controller;

import com.lin.onlineorder.entity.MenuItem;
import com.lin.onlineorder.entity.Restaurant;
import com.lin.onlineorder.service.MenuInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class MenuInfoController {

	@Autowired
	private MenuInfoService menuInfoService;

	@RequestMapping(value = "/restaurant/{restaurantId}/menu", method = RequestMethod.GET)
	@ResponseBody
	public List<MenuItem> getMenus(@PathVariable int restaurantId) {
		return menuInfoService.getAllMenuItem(restaurantId);
	}

	@RequestMapping(value = "/restaurants", method = RequestMethod.GET)
	@ResponseBody
	public List<Restaurant> getRestaurants() {
		return menuInfoService.getRestaurants();
	}
}